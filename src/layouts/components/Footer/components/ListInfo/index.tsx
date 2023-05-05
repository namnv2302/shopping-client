import { Space, Typography } from "antd";
import { ListContactInfoType } from "@layouts/components/Footer";
import { v4 as uuIdV4 } from "uuid";

const ListInfo = ({ data }: { data: ListContactInfoType }) => {
  return (
    <Space direction="vertical">
      <Typography.Title level={5} style={{ marginBottom: "20px" }}>
        {data.label}
      </Typography.Title>
      {data.items.map((item: any) => (
        <Typography.Text
          key={uuIdV4()}
          style={{
            fontSize: "1.3rem",
            fontWeight: 400,
            color: "#8A8FB9",
            lineHeight: "19px",
          }}
        >
          {item}
        </Typography.Text>
      ))}
    </Space>
  );
};

export default ListInfo;
