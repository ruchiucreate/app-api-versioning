import { Platform } from 'react-native';
import { getAppstoreAppMetadata } from "react-native-appstore-version-checker";

export const getAppLiveVersion = () => {
    const storeSpecificId =
        Platform.OS === "ios" ? "1147396723" : "com.whatsapp";

    getAppstoreAppMetadata(storeSpecificId)
        .then(metadata => {
            //     metadata.currentVersionReleaseDate
            console.log('metadata.version : ' + metadata.version)
            return metadata.version;
        })
        .catch(err => {
            console.log("error occurred while getting version", err);
        });
}
