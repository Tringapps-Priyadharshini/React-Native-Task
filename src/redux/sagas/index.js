import axios from 'axios';
import { put, call, all } from 'redux-saga/effects';

const getUsers = async () => {
    try {
        const responseAxios = await axios.get('https://fakestoreapi.com/products')
        const response = responseAxios.data;
        return ({ response })
    } catch (error) {
        return ({ error })
    }
}

function* fetchApiData() {
    const { response, error } = yield call(getUsers)

    if (response) {
        yield put({ type: 'DATA', payload: response })
    } else {
        console.log('error: ', error.message)
    }
}

export default function* rootSaga() {
    yield all([
        fetchApiData(),
    ])
}
