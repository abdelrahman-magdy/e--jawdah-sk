import React from 'react'
import {Side,Content} from '../../components';

const Layout = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <aside className="col-3">
                <Side/>
            </aside>
            <div className="col-9">
                <Content/>
            </div>
        </div>
    </div>
  )
}

export default Layout