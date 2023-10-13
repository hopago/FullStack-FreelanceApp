import { useReducer, useState } from 'react';
import './add.scss';
import { INITIAL_STATE, gigReducer } from '../../reducers/gigReducer';
import { upload } from '../../utils/upload';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authReq } from '../../requestMethod';
import { useNavigate } from 'react-router-dom';


const Add = () => {

  const [coverFile, setCoverFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async (e) => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async file => {
          const url = await upload(file);
          return url
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return authReq.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["gigs"]);
    },
  });

  const createGig = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate("/mygigs");
  };

  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
            />
            <label>Category</label>
            <select name="category" id="cats" onChange={handleChange}>
              <option value="design">Design</option>
              <option value="develope">Web Develope</option>
              <option value="graphic">3D Graphic</option>
              <option value="music">Music</option>
            </select>
            <div className="images">
              <div className="imagesInput">
                <label htmlFor="coverImg" style={{ cursor: "pointer" }}>
                  Cover Image
                </label>
                <input
                  id="coverImg"
                  onChange={(e) => setCoverFile(e.target.files[0])}
                  type="file"
                  style={{ display: "none" }}
                />
                <label htmlFor="mainImg" style={{ cursor: "pointer" }}>
                  Upload Image
                </label>
                <input
                  id="mainImg"
                  onChange={(e) => setFiles(e.target.files)}
                  type="file"
                  multiple
                  style={{ display: "none" }}
                />
              </div>
              <button onClick={handleUpload}>{uploading ? "uploading..." : "Upload"}</button>
            </div>
            <label>Description</label>
            <textarea
              onChange={handleChange}
              name="desc"
              id=""
              cols="30"
              rows="15"
              placeholder="Description"
            ></textarea>
            <button onClick={createGig}>Create</button>
          </div>
          <div className="right">
            <h3>Additional</h3>
            <label>Service Title</label>
            <input
              type="text"
              name="shortTitle"
              onChange={handleChange}
              placeholder="e.g SPA Web Design"
            />
            <label>Short Description</label>
            <textarea
              name="shortDesc"
              onChange={handleChange}
              id=""
              cols="30"
              rows="15"
              placeholder="Short description"
            ></textarea>
            <label>Delivery Time (e.g. 3 days)</label>
            <input
              type="number"
              name="deliveryTime"
              onChange={handleChange}
              min={1}
            />
            <label>Revision Number</label>
            <input
              name="revisionNumber"
              onChange={handleChange}
              type="number"
              min={1}
            />
            <label>Add Features</label>
            <form className="add" onSubmit={handleFeature}>
              <input type="text" placeholder="e.g page design" />
              <button>Add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((f) => (
                <div className="item" key={f}>
                  <button onClick={() => dispatch({ type: "REMOVE_FEATURE", payload: f})}>
                      {f}
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>
            <label>Price</label>
            <input onChange={handleChange} name="price" type="number" min={1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add
