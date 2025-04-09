"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/database/firebase";
import usePagination from "@/hooks/use-pagination";
import Pagination from "@/ui/pagination";
import BlogWebsiteCard from "./blogwebsitecard";
import BlogSidebar from "../blogs/blog-sidebar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Blog = {
  id?: string;
  image: string;
  imageUrl?: string;
  date: string;
  title: string;
  author: string;
  post_info: string;
  features: string;
  category: string;
  metaKeywords: string;
  metaDescription: string;
  link: string;
};

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsSnapshot = await getDocs(collection(db, "products"));
        const blogsData = blogsSnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as Blog)
        );
        setBlogs(blogsData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const parseDate = (dateString: string): Date => {
    return new Date(dateString);
  };

  const sortedBlogs = blogs.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const { currentItems, handlePageClick, pageCount } = usePagination<Blog>(
    sortedBlogs,
    8
  );

  return (
    <div className="blog-section-six position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="position-relative service-details">
          <div className="container">
            <div className="position-relative">
              <div className="row">
                <div className="col-lg-12 wow fadeInLeft">
                  <div className="title-one text-center mb-50 lg-mb-30 md-mb-10 details-meta">
                    <h2>Our Products</h2>
                    <p className="">
                      Discover our range of cutting-edge solar solutions,
                      designed for smart spaces, energy conversion, and everyday
                      convenience. From Smart Solar Huts to Plug & Play Solar
                      kits, we bring innovation, sustainability, and efficiency
                      to power your world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-xl-5">
          <div className="row">
            {loading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="mb-5 col-lg-6 col-sm-6">
                    <Skeleton height={250} />
                    <Skeleton count={3} />
                  </div>
                ))
              : currentItems.map((blog, i) => (
                  <div
                    key={blog.id}
                    className="col-lg-6 col-sm-6 wow fadeInUp"
                    data-wow-delay={`0.${i}s`}
                  >
                    <BlogWebsiteCard blog={blog} />
                  </div>
                ))}
            <div className="pagination-one mt-80 lg-mt-50">
              <Pagination
                handlePageClick={handlePageClick}
                pageCount={pageCount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
