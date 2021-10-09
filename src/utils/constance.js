export const newsList = new Array(50).fill({}).map((item, index) => ({
  id: Math.floor(Date.now() * Math.random()),
  title: `News #${index + 1}`,
  photo:
    "https://images.unsplash.com/photo-1633441098723-bfaee25878c0?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  text:
    "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  rating: (Math.random() * 5).toFixed(1),
}));
