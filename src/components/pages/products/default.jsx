import React, { useEffect } from "react";
import imagesLoaded from "imagesloaded";
import { Helmet } from "react-helmet";

import MediaOne from "./partials/media/media-one";
import ProductDetailOne from "./partials/details/detail-one";
import DescOne from "./partials/description/desc-one";
import RelatedProducts from "./partials/related-products";
import StickyBar from "./partials/sticky-bar";

import Breadcrumb from "../../common/breadcrumb";
import QuickView from "../../features/product/common/quickview";

import { productGallery } from "../../../utils";

//const productRef = require("../../../database/dbase").docRef;

function SingleProduct(props) {
  let productId = props.match.params.id;

  // const admin = require("firebase-admin");
  // admin.initializeApp({
  //   credential: admin.credential.applicationDefault(),
  // });
  // const db = admin.firestore();

  // try {
  //   let docRef = async () => {
  //     await db
  //       .collection("products")
  //       .get()
  //       .then((snapshot) => {
  //         snapshot.forEach((doc) => {
  //           console.log(doc.id, "=>", doc.data());
  //         });
  //       })
  //       .catch((err) => {
  //         console.log("Error getting documents", err);
  //       });
  //   };
  // } catch (e) {
  //    export GOOGLE_APPLICATION_CREDENTIALS="D:\webDevelopment\shoes-ecommerce\shoes-backend\shoes-backend-9ab8349ac915.json"
  //   console.log(e);
  // }

  useEffect(() => {
    productGallery();

    document.querySelector(".skel-pro-single").classList.remove("loaded");

    let imgLoad = imagesLoaded(".product-main-image", { background: true });

    imgLoad.on("done", function(instance, image) {
      document.querySelector(".skel-pro-single").classList.add("loaded");
    });
  }, [productId]);

  return (
    <>
      <Helmet>
        <title>KickzOn</title>
      </Helmet>

      <h1 className="d-none">
        Molla React eCommerce Template - Product Default
      </h1>
      <div className="main">
        <Breadcrumb
          title="Default"
          type="product"
          slug="default"
          adClass="breadcrumb-nav border-0 mb-0"
          productId={productId}
          parent1={["Products", "product"]}
        />

        <div className="page-content">
          <div className="container">
            <div className="product-details-top skeleton-body">
              <div className="row skel-pro-single">
                <div className="col-md-6">
                  <div className="skel-product-gallery"></div>

                  <MediaOne id={productId} />
                </div>

                <div className="col-md-6">
                  <div className="entry-summary row">
                    <div className="col-md-12">
                      <div className="entry-summary1"></div>
                    </div>

                    <div className="col-md-12">
                      <div className="entry-summary2"></div>
                    </div>
                  </div>

                  <ProductDetailOne id={productId} />
                </div>
              </div>
            </div>

            <DescOne id={productId} />

            <h2 className="title text-center mb-4">You May Also Like</h2>

            <RelatedProducts />
          </div>
        </div>

        <StickyBar id={productId} />

        <QuickView />
      </div>
    </>
  );
}

export default SingleProduct;
