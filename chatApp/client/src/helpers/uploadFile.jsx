// const cloudName = process.env.REACT_APP_CLOUD_NAME
import axios from '../axios'// need other axios
const url = ''// need url from cloudinary

const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'chatApp');


    const res = await axios.post(url, formData);
    const data = await res.json();
    return data;

}
export default uploadFile
//2:20