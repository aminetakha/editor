export const settings = {
  paragraph: {
    type: "text",
    label: "Paragraph",
    defaultValue: "",
  },
  header: {
    type: "text",
    label: "Header",
    defaultValue: "text",
    options: ["h1", "h2", "h3", "h4", "h5", "h6"],
  },
  image: {
    type: "image",
    label: "Image",
    defaultValue: "",
  },
  list: {
    type: "list",
    label: "List",
    options: ["ordered", "unordered"],
  },
};
