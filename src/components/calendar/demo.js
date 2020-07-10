/**
 * @flow
 * @Description:
 * @author cuixia wang
 * @date 2020-07-09
 */
import React from "react";
import Index from "./index";
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

export default (props = {}) => {
  return (
    <div style={{ width: "70%", height: "80%", margin: "50px auto 0" }}>
      <ConfigProvider>
        <Index
          locale={zhCN}
          showRestDay={false}
          // headerRender={headerRender}
          showExtraCol={true}
          // extraColRender={() => <div>sasasas</div>}
          // extraColFullRender={() => <div>sasasas</div>}
          showRestDay={false}
          // dateFullCellRender={() => <div>2222</div>}
          onlySwitcMonth
        />
      </ConfigProvider>
    </div>
  );
};
