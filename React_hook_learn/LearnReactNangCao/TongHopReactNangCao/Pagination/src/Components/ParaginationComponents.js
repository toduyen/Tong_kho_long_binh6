import React, { useEffect, useState } from 'react'
import "./style.css";
const renderData = data => {
    return(
        <ul>
            {
                data.map((value , key) => 
                    <li key={key}>{value.title}</li>
                )
            }
        </ul>
    )
}

function ParaginationComponents() {
    const [data, setData] = useState([]);
    // tren so number hien thi dau tien
    const [current, setcurrent] = useState(1);
    // hien thi 5 item
    const [item, setitem] = useState(5)


  // setUp So trang toi da hien thi
  const [phantuhienthi, setphantuhienthi] = useState(5);
  const [sotranglonnhat, setsotranglonnhat] = useState(5);
  const [sotrangnhonhat, setsotrangnhonhat] = useState(0);



    // click chuyen trang
    const handleClick = (event) => {
    setcurrent(Number(event.target.id))
    } 

    // chia so muc hien thi cho 5
    const page = [];
    for(let i = 1 ; i <= Math.ceil(data.length/item) ; i++)
    {
        page.push(i)
    }
    
    // in ra toi thieu 5 trang
    const renderNumber = page.map((value) => {
        if(value < sotranglonnhat + 1 && value > sotrangnhonhat){
            return(
                <li key={value} id={value} onClick={handleClick} className={current == value ? "active" : null}>
                    {value}
                </li>
            )
        }else
        {
            return null
        }
    })
    // hien thi phan tu cuoi cung
    const indexOflastItem = current * item;
    // hien thi phan tu dau tien
    const indexOfFirstItem = indexOflastItem - item;
    // trang hien tai
    const currentItem = data.slice(indexOfFirstItem , indexOflastItem);
  

  


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json()).then((json) => setData(json));
    }, [])
  

   const handleNext = () => {
    setcurrent(current + 1)
    if(current + 1 > sotranglonnhat){
        setsotranglonnhat(sotranglonnhat + phantuhienthi);
        setsotrangnhonhat(sotrangnhonhat + phantuhienthi);
    }
   }

   
   const handlePrev = () => {
    setcurrent(current - 1)
    if((current - 1) % phantuhienthi == 0){
        setsotranglonnhat(sotranglonnhat - phantuhienthi);
        setsotrangnhonhat(sotrangnhonhat - phantuhienthi);
    }
   }

   // tao ra mấy cái ký tự ... ở chỗ số trang
   let increatement = null;
    if(data.length > sotranglonnhat)
    {
        increatement = <li onClick={handleNext}>&hellip;</li>
    }


    let decreatement = null;
    if(sotrangnhonhat >= 1)
    {
        decreatement = <li onClick={handlePrev}>&hellip;</li>
    }

    return (
       <React.Fragment>
           <h1>ToDoList</h1>
           {renderData(currentItem)}
            <div className="styleForpaganation">
                <ul>
                    <li>
                        <button onClick={handlePrev}
                        disabled={current === data[0]?.id ? true : false}
                        >Prev</button>
                    </li>
                    {decreatement}
                    
                    {renderNumber}

                    {increatement}
                    <li>
                        <button onClick={handleNext}
                         disabled={current === data[data.length - 1]?.id ? true : false}
                        >next</button>
                    </li>
                </ul>
            </div>
         
       </React.Fragment>
    )
}

export default ParaginationComponents
