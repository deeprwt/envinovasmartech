"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/database/firebase";
import usePagination from "@/hooks/use-pagination";
import Pagination from "@/ui/pagination";
import ArticleWebsiteCard from "./articlewebsitecard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Article = {
  id?: string;
  image: string;
  imageUrl?: string;
  date: string;
  title: string;
  author: string;
  post_info: string;
  category: string;
  metaKeywords: string;
  metaDescription: string;
  link: string;
  draft: boolean; // Add this line
};

const ArticleList = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesSnapshot = await getDocs(collection(db, "articles"));
        const articlesData = articlesSnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as Article)
        );
        setArticles(articlesData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const parseDate = (dateString: string): Date => {
    return new Date(dateString);
  };

  // Filter out draft articles and sort the remaining articles
  const filteredArticles = articles.filter((article) => !article.draft);

  const sortedArticles = filteredArticles.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const { currentItems, handlePageClick, pageCount } = usePagination<Article>(
    sortedArticles,
    9
  );

  return (
    <div className="blog-section-two position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="position-relative service-details">
          <div className="container">
            <div className="position-relative">
              <div className="row">
                <div className="col-lg-12 wow fadeInLeft">
                  <div className="title-one text-center mb-50 lg-mb-30 md-mb-10 details-meta">
                    <h2>The Envinova Journal</h2>
                    <p className="">
                      Stay updated with the latest in solar innovation,
                      sustainability, and smart infrastructure. From industry
                      insights to our journey in transforming public spaces,
                      explore stories that shape the future of clean energy.
                      Dive in and discover how we’re making an impact!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <div className="row gx-xxl-5 m-auto justify-content-start">
            {loading
              ? Array.from({ length: 9 }).map((_, index) => (
                  <div key={index} className="col-md-4 mb-5">
                    <Skeleton height={250} />
                    <Skeleton count={1} />
                  </div>
                ))
              : currentItems.map((article) => (
                  <div key={article.id} className="col-md-4">
                    <ArticleWebsiteCard article={article} />
                  </div>
                ))}
          </div>
          <div className="pagination-one mt-20">
            <Pagination
              handlePageClick={handlePageClick}
              pageCount={pageCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
