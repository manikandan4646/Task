import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addData } from './store/action';

function App() {
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [tableData, setTableData] = useState<any>([]);
    const dispatch = useDispatch();
    const { data } = useSelector((state:any) => state.ReducerState);

    useEffect(() => {
        setSearchText('')
        getData();
    },[page]);

    useEffect(() => {
        if(data?.length > 0) {
            setTableData(data);
        }
    },[data])

    useEffect(() => {
        let filteredArr = data.filter((val: any) => (
            val?.name.toLowerCase().includes(searchText.toLowerCase())
        ))
        setTableData(filteredArr);
    },[searchText])

    const getData = async () => {
        const res = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`).then((result) => {return result.json()})
        dispatch(addData(res));
    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ padding: '30px' }}>
            <div className='w-100'>
                <div className='d-flex justify-content-end align-items-center mb-3'>
                    <input 
                        type="text" 
                        className='px-2 py-1' 
                        placeholder='Search by name' 
                        style={{ outline: 'none', border: "1px solid grey", fontSize: '15px', borderRadius: '5px'}} 
                        value={searchText}
                        onChange={(e: any) => setSearchText(e.target.value)}
                    />
                </div>
                <table className="table table-lg table-bordered" style={{ width: '100%' }}>
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">Id</th>
                            <th style={{width:'10%'}}>Image</th>
                            <th scope="col" style={{width:'20%'}}>Name</th>
                            <th scope="col" style={{width:'20%'}}>Tag Line</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                            {tableData.length > 0 ?
                                (tableData || []).map((x: any, index: any) => (
                                    <tr key={index}>
                                        <th>{x.id}</th>
                                        <td className='d-flex justify-content-center align-items-center'><img src={x.image_url} alt="" style={{width: '30px'}} /></td>
                                        <td>{x.name}</td>
                                        <td>{x.tagline}</td>
                                        <td>{x.description}</td>
                                    </tr>
                                ))
                            : 
                            <tr>
                                <th colSpan={5} style={{textAlign: 'center'}}>No Data Found</th>
                            </tr>
                        }
                    </tbody>
                </table>
                <div className='d-flex justify-content-end mt-3'>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className={`page-item ${page === 1 && 'disabled'}`} onClick={() => setPage(page - 1)}>
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className={`page-item active`}>
                                <a className="page-link" href="#">{page}</a>
                            </li>
                            <li className={`page-item`} onClick={() => setPage(page + 1)}>
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default App;
