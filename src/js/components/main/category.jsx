import { Stack, Typography } from "@mui/material";
import { collors } from "../../../constants/color";

const Category = ({
  selectedCategoryHandelar,
  selectedCategory,
  category,
  name,
}) => {
  return (
    <Stack direction={"row"} alignItems={"center"}>
      <Typography
        variant="h5"
        fontWeight={"bold"}
        sx={{ marginTop: "20px", marginRight: "20px", color: name === "Latest Trailers" && collors.white }}
      >
        {name}
      </Typography>
      <Stack
        direction={"row"}
        border={"2px solid"}
        width="25%"
        sx={{
          borderRadius: "32px",
          marginTop: "20px",
          height: "34px",
          borderColor: collors.lightblue,
          background: collors.white,
        }}
      >
        {category.map((item) => (
          <button
            key={item.name}
            className="category-btn"
            style={{
              transition: "change 2s",
              borderRadius: "30px",
              width: "50%",
              border: "none",
              background: item.name === selectedCategory && collors.mainBlue,
              color: item.name === selectedCategory && collors.lightblues,
            }}
            onClick={() => selectedCategoryHandelar(item.name)}
          >
            <span style={{ opacity: "1" }}>{item.data}</span>
          </button>
        ))}
      </Stack>
    </Stack>
  );
};

export default Category;
