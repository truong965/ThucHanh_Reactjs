import React, { useState } from 'react'
import "./BaiTap2.css"
function BaiTap2() {
      const [inputText, setInputText] = useState('')
      const [textList, setTextList] = useState([])
      const handleInputChange = (e) => {
            setInputText(e.target.value)
      }
      const handleAddText = () => {
            if (inputText.trim() !== '') {
                  setTextList([...textList, { text: inputText, selected: false }])
                  setInputText('')
            }
      }
      const handleCheckBoxChange = (index) => {
            const newTextList = [...textList]
            newTextList[index].selected = !newTextList[index].selected
            setTextList(newTextList)
      }
      const handleDelete = () => {
            const newTextList = textList.filter((item) => !item.selected)
            setTextList(newTextList)
      }

      return (
            <div className="bai-tap-2-container">
                  <h1>Display text</h1>
                  <input
                        type="text"
                        value={inputText}
                        onChange={handleInputChange}
                        placeholder="type somthing"
                  />
                  <div className="button-container">
                        <button onClick={handleAddText}>add Text</button>
                        <button onClick={handleDelete}>delete</button>
                  </div>
                  <ul>
                        {textList.map((item, index) => (
                              <li key={index}>
                                    <input
                                          type="checkbox"
                                          checked={item.selected}
                                          onChange={() => handleCheckBoxChange(index)}
                                    />
                                    <span>{item.text}</span>
                              </li>
                        ))}
                  </ul>
            </div>

      )

}
export default BaiTap2