import React from 'react';
import toolStore from "../store/toolStore";

const SettingBar = () => {
    return (
        <div className="setting-bar">
            <label htmlFor="line-width">Толщина линии</label>
            <input style={{margin: 10}}
                   id="line-width"
                   type="number"
                   defaultValue={5} min={1} max={50}
                    onChange={e => toolStore.setLineWidth(e.target.value)}
            />
            <label htmlFor="stroke-color">Цвет обводки</label>
            <input onChange={e => toolStore.setStrokeColor(e.target.value)} id="stroke-color"
                   type="color"/>
        </div>
    );
};

export default SettingBar;
