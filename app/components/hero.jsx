

export default function Hero() {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://images.pexels.com/photos/15780336/pexels-photo-15780336/free-photo-of-pizza-with-ham.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
  }}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
      Kulinarika
      s haloškim pridihom
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
}