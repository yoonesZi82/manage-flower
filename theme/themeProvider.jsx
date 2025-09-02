import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import Fa from "antd/locale/fa_IR";
import React from "react";

const ThemeProvider = ({ children }) => {
  return (
    <ConfigProvider
      direction="rtl"
      locale={Fa}
      theme={{
        components: {
          Menu: {
            iconSize: 16,
            itemColor: "#fff",
            itemHoverColor: "#fff",
            horizontalItemSelectedColor: "#fff",
            itemSelectedBg: "rgba(0, 0, 0, 0.1)",
            itemSelectedColor: "#fff",
            darkItemBg: "#fff",
            fontSize: 16,
          },
          Statistic: {
            contentFontSize: 16,
            titleFontSize: 12,
          },
          Input: {
            fontSize: 16,
          },
          Pagination: {
            itemBg: "#1e433c",
            itemActiveBg: "#431e24",
          },
          Collapse: {
            contentBg: "#431e24",
            colorText: "#1e433c",
            headerBg: "#431e24",
          },
          Table: {
            headerBg: "#431e24",
            headerColor: "#fff",
            rowHoverBg: "#1e433c",
          },
          Result: {
            colorTextHeading: "#431e24",
            colorText: "#431e24",
          },
        },
        token: {
          colorPrimary: "#34180e",
          colorError: "#ff4d4f",
          colorErrorHover: "#ff7875",
          colorInfo: "#1677ff",
          colorSuccess: "#52c41a",
          fontFamily: "var(--font-vazir)",
        },
      }}
    >
      <AntdRegistry>{children}</AntdRegistry>
    </ConfigProvider>
  );
};

export default ThemeProvider;
