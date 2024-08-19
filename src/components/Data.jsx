export const Data = ({ handleChange, valor, handleTipClick }) => {
    return (
        <div className="data-wrapper">
            <h1>Bill</h1>
            <label htmlFor="input-bill"><input onChange={handleChange} name="bill" value={valor.bill} className="input-bill" id="input-bill" type="number" min={0} /></label>
            <h2>Select Tip %</h2>
            <ul>
                {[5, 10, 15, 25, 50].map(tp => <li id="percentage" key={tp}><button type="button" name="tip" onClick={()=> handleTipClick(tp)} className={`percentage-button ${valor.tip === tp && 'active'}`} value={tp}>{tp}%</button></li>)}
                <li><input onChange={handleChange} name="tip" type="number" placeholder="Custom" id="custom-percentage-button" className="percentage-button" value={valor.tip !== '' && ![5, 10, 15, 25, 50].includes(valor.tip) ? valor.tip : ''} /></li>
            </ul>
            <h2>Number of People</h2>
            <label htmlFor="input-people"><input onChange={handleChange} name="people" value={valor.people} id="input-people" className="input-people" type="number" min={1} /></label>
        </div>
    )
}
