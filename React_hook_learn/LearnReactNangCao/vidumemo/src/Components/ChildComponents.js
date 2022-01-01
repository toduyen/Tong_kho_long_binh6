import React from 'react'

function ChildComponents({Name}) {
    console.log('Rerender components');
    return (
        <React.Fragment>
            <p>Hello anh em {Name}</p>
        </React.Fragment>
    )
}

export default React.memo(ChildComponents,(preVale , CurrenVale)=>{
    return preVale.Name === CurrenVale.Name
});  