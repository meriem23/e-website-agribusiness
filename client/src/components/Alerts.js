import React from 'react'
import {Alert} from 'react-bootstrap/'
import { connect } from 'react-redux'

const Alerts = props => {
    return (
        props.alerts.lenght> 0 && props.alert.map(alert => (
            <Alert key={alert.id} variant={alert.type}>
                {alert.msg}
            </Alert>
        ))
    )
}
const mapStateToProps = state => {
    return {
        alerts: state.alert
    }
}

export default connect(mapStateToProps)(Alerts)
