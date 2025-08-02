import { Loader } from "@/components/loading/product/Loader";
import axios from "axios";
import React, { useEffect, useState } from "react";

function InfoProduct({ id }) {
  const [weight, setWeight] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post("/api/products/recive", {
        productID: id,
      })
      .then((res) => {
        res.status === 200 && setWeight(res.data.weight);
      })
      .catch((err) => {
        err.status === 402
          ? setError("محصول یافت نشد")
          : setError("در پیدا کردن محصول مشکلی به وجود امد");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="pt-10 w-full">
      {loading && <Loader />}
      {error && <p className="text-sidebarTheme text-lg">{error}</p>}
      {!loading && !error && (
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center w-full">
            <p className="text-sidebarTheme">وزن</p>
            <p className="text-sidebarTheme"> {weight} گرم </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoProduct;
