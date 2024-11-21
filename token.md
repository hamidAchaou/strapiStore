a2df0c24e148f56df72211b2431ecd56e19bf62217c20973d939e57f8e4191d756ecad3ca90528ffecd378083575847d30de3fd98f2b4c10efc359569db6c19fd17fdef174b41573a3eef981e923bf5d66006883e37a720d938bc52be66d137a820ff6535e39581f29b8cc09f7b5bfd0dff3edb8b293bcb96e04d079d5647648

## hp Life 
1. Link
```bash
   https://www.life-global.org/trainee/courses/343/lessons/886/tasks/1073/content
```

## Card data 
```jsx
   <div className="container">
      <h2>Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
            <div className="card">
              <div className="card-body">
                <img
                  src={`http://localhost:1337${product.images.url}`}
                  alt="profile"
                />
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> 
```