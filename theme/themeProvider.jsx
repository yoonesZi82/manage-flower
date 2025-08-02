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
            itemBg: "#E2DCE5",
            itemActiveBg: "#513d4d",
          },
          Collapse: {
            contentBg: "#E2DCE5",
            headerBg: "#513d4d",
          },
          Table: {
            headerBg: "#E2DCE5",
            headerColor: "#513d4d",
            rowHoverBg: "#E2DCE5",
          },
          Result: {
            colorTextHeading: "#513d4d",
            colorText: "#513d4d",
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
