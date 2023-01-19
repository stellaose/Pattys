import React from 'react'

export const TabItem = ({ id, svg, title, activeTab, setActiveTab }) => {
    
    const handleClick = () => {
        setActiveTab(id);
    };
      
    return (
        <>
            <div>
                <p onClick={handleClick} className={activeTab === id ? "accTab" : "nonAccTab"}>
                    {svg} {' '}<span>{ title }</span>
                </p>
            </div>
        </>
        
    )
}

export const TabContent = ({id, activeTab, children}) => {
    return (
      activeTab === id ? <div className="TabContent">
        { children }
      </div>
      : null
    );
};
