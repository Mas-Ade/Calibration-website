import axios from 'axios'

const url = `http://10.202.10.42:3003/api/getdata_devicemaster_calibration`

export const getData = async () => {
    const datas = await axios.get(url)
    console.log('Berhasil Muncul', datas )
    // return datas.data
    // return movie.data.results
}
