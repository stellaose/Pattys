import React from 'react'

export const TabItem = ({ id, title, activeTab, setActiveTab }) => {
    
    const handleClick = () => {
        setActiveTab(id);
    };
      
    return (
        <>
            <div>
                <p onClick={handleClick} className={activeTab === id ? "tab" : "nonTab"}>
                    { title }
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
