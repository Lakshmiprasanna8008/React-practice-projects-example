import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickUpdate = () => {
    updateActiveTab(tabId)
  }

  const onClickActive = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${onClickActive}`}
        onClick={onClickUpdate}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
