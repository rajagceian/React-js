import axios from 'axios'

const GithubInfo = async () => {
            const res = await axios.get("https://api.github.com/users/rajagceian");
            //console.log(res.data)
            return res.data;
}

export default GithubInfo;
