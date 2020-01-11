import React from 'react'
import CheckMark from '../svg/check_mark'

const FiltersModal = ({filters, handleClick}) => {
    return (
        <div className="filters-modal-container">
            <div className="filters-modal">
                <section className="business-type-container">
                    <h3>Filters</h3>
                    {Object.keys(filters).map(key => {
                        let readableKey = key.split(/(?=[A-Z])/).join(" ")
                        readableKey = readableKey[0].toUpperCase() + readableKey.slice(1)
                        return (
                          <div
                            className="checkbox-container"
                            key={key}
                          >
                            <label>
                              <input type="checkbox" onClick={() => handleClick(key)}/>
                              <div className="checkbox-placeholder">
                                {filters[key] && (
                                  <div className="selected-check">
                                    <div>
                                      <CheckMark />
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="checkbox-value">
                                {readableKey}
                              </div>
                            </label>
                          </div>
                        );
                    })}
                </section>
            </div>
        </div>
    )
}

export default FiltersModal
