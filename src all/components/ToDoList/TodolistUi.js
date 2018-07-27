import React from 'react'

export default (props) => {
  const { inputValue, list, handleInputChange, handleCheckboxChange, handleSubmit, handleDelete } = props
  console.log(list)
  let c = list.filter((item)=>{
              return item.flag
           }).length
  return(
		<div>
			<input value={inputValue} onChange={handleInputChange} type="text"/>
			<button onClick={handleSubmit}>提交</button>
			{c}
			<ul>
				{
					list.map((item,index) => {
						return (
						  <li key={item.id}>
						  	<input onChange={handleCheckboxChange.bind(this, item.id)} defaultChecked={item.flag} type="checkbox"/>
						  	{item.title}
						  	<button onClick={handleDelete.bind(this,list,index)}>D</button>
						  </li>
						)
					})
				}
			</ul>
		</div>
	)
}