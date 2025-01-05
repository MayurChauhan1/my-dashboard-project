const NewsItem = ({ title, author, date }) => (
    <div className="border p-4 my-2">
      <h3>{title}</h3>
      <p>By {author} on {date}</p>
    </div>
  );
  
  export default NewsItem;  