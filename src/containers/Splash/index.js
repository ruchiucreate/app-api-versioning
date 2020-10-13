import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Style from './style';
import { getApiVersionRequest, getApiResultRequest } from './action';

import { getAppLiveVersion } from '../../utilities/commonFunctions';

class Splash extends React.PureComponent {

    componentDidMount() {
        getAppLiveVersion();
        this.props.requestApiVersion();
    }

    render() {
        return (
            <SafeAreaView style={Style.parentContainer}>
                <View style={Style.container}>
                    <Text style={Style.textStyle}>This is Splash Screen!!!</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.versionReducer.loading,
    };
};
const mapDispatchToProps = dispatch => ({
    requestApiVersion: () => dispatch(getApiVersionRequest()),
    requestApiResult: (apiVersion) => dispatch(getApiResultRequest(apiVersion)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Splash);
