import axios from 'axios';

const CANDIDATE_API_BASE_URL = "http://ec2-100-25-98-248.compute-1.amazonaws.com:8081/admin/login";

class Adminservice {

    createAdmin(admin) {
        return axios.post(CANDIDATE_API_BASE_URL, admin);
    }
}


export default new Adminservice();