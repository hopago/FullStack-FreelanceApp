import './add.scss';


const Add = () => {
  return (
    <div className="add">
        <div className="container">
          <h1>Add New Gig</h1>
          <div className="sections">
            <div className="left">
              <label>Title</label>
              <input type="text" placeholder='Title' />
              <label>Category</label>
              <select name="cats" id="cats">
                <option value="design">Design</option>
                <option value="develope">Web Develope</option>
                <option value="graphic">3D Graphic</option>
                <option value="music">Music</option>
              </select>
              <label htmlFor='coverImg' style={{ cursor: "pointer" }}>Cover Image</label>
              <input id='coverImg' type="file" style={{ display: "none" }} />
              <label htmlFor='mainImg' style={{ cursor: "pointer" }}>Upload Image</label>
              <input id='mainImg' type="file" multiple style={{ display: "none" }} />
              <label>Description</label>
              <textarea name="" id="" cols="30" rows="15" placeholder='Description'></textarea>
              <button>Create</button>
            </div>
            <div className="right">
              <h3>Additional</h3>
              <label>Service Title</label>
              <input type="text" placeholder='e.g SPA Web Design' />
              <label>Short Description</label>
              <textarea name="" id="" cols="30" rows="15" placeholder='Short description'></textarea>
              <label>Delivery Time (e.g. 3 days)</label>
              <input type="number" min={1} />
              <label>Revision Number</label>
              <input type="number" min={1} />
              <label>Add Features</label>
              <input type="text" placeholder='e.g page design' />
              <input type="text" placeholder='e.g server issue' />
              <input type="text" placeholder='e.g setting up a domain' />
              <input type="text" placeholder='e.g hosting' />
              <label>Price</label>
              <input type="number" min={1} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Add
