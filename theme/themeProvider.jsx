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
            itemColor: "#404517",
            itemHoverColor: "#404517",
            horizontalItemSelectedColor: "#404517",
            itemSelectedBg: "rgba(0, 0, 0, 0.1)",
            itemSelectedColor: "#404517",
            darkItemBg: "#404517",
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
            itemBg: "#404517",
            itemActiveBg: "#DDE3AB",
          },
          Collapse: {
            contentBg: "#DDE3AB",
            colorText: "#404517",
            headerBg: "#DDE3AB",
          },
          Table: {
            headerBg: "#DDE3AB",
            headerColor: "#404517",
            rowHoverBg: "#404517",
          },
          Result: {
            colorTextHeading: "#404517",
            colorText: "#404517",
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
