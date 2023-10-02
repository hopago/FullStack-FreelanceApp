import axios from 'axios';

const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "freelance");
    data.append("api_key", "629731954352127");
    try {
      const res = await axios.post("https://api.cloudinary.com/v1_1/Hopago/image/upload", data);
      const { url } = res.data;
      return url;
    } catch (err) {
      console.log(err.response.data);
    }
};

export default upload;