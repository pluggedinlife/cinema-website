function AdvSection(items) {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="border border-gray-300">
          <img className="w-60" src={item.url} alt={item.altText} />
        </div>
      ))}
    </>
  );
}

export default AdvSection;
