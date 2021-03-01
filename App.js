/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';

const App: () => React$Node = () => {
  return (
    <View style={styles.body}>
      <WebView
        source={{
          uri:
            'https://pompoarismocatiadamasceno.club.hotmart.com/t/page-embed/ZNOwglbbOm?subdomain=pompoarismocatiadamasceno&sparkleAppVersion=1&token=H4sIAAAAAAAAAG1T25KjOAz9ot4CHDrDI%2BHuxqYBc%2FNbgKTBmIQO4fr148xOP2zVPrjKlnykIx3pssGmdKo2aGGc7J6MW2%2F0bpFaGd671w15akDtn8sG5UpJt1xRmzJLXp%2F3Oj%2FN1S3ioYuXIoeP0kmbytWnQtGefg%2B3QAklzChHe7f6mSVT8vXEJm5xK7fUsblPYIeVZMdmuBakZoHxSoxZCU7cY0Pp3SAvsrD1DQiqnks0hrW430sQPusc86oVBJklYYK2gHSHQMZy5Whb7SRfCTg1Vf8cKRlXvFcTZt2EmLX6zAPBbh1we9iQ2f1rJ%2FoegB9sqlc%2F2MxeKkNlpSJNxc07ViBdSgAlmv%2Bn3iMiCUCmtWGSLMjUxXkaVW%2Fv52z5H994DPNoqPtfx8SOriH3jsFu90FmKYGJVp90gterTydODblFirX7JASUVDsixRaYDce7qIlUCyJCLLNTA7MAyDjIgSmwu8hlIhWzBAQkkYL9xa9YsVmswgcERuBGOeT1EGa1kfBTVAA7pYkEsGlPgYgZkDqnALplJ62U8Qazrx3FkoqYfhBcFpqFz4LhBm2SJPQDIq6C2NdBcBS1jK8ji7p%2F7kevXVqaN4vH7itmggPThb9ahZZNnUdCTzjUDufV5r1nGySJZcextNq5nJIo9V76KzRTO5pFc%2FUaTo7DMIU%2BsdJrInGX8DR85ahcOFM3lUrwByN0kxehQ%2Ff3HRLLTqJOi0mqkTipgzTVX%2Fa%2Fcw03j0uj1w%2FSORZz1VNOHSRTBlsxuyrKiid2cFdsog9ZAvwsbShBO1Igp30C%2FixNj8dzlk61rQ30tTysAJR1u9Bd6Mo7tHsiBlpE34RmvPFfWpidXPRIoT1sik0s2u06pvab9B0lQz30fmaenbofQTKViD%2FzOv62T2O02mPOrSB9PO7WWXu%2FnljXfX7nwyck9qh5MenbOTan25Kuhdo8nNFgVmnBZt4%2Fj3Vig3bnl4%2F2W9%2FmWYrA2vPwsMxD1LD3EsLhpF8ak384qL2NsR1Pd%2BMIPw7aCNU0KNFdNud3c3HkU5XY1LL6t%2FAWlb9uWv6d65cM4hm85U51L3WLadEjkAy57sRrVn2in1dvg%2B1sOKxbzm6rgePns8Nxv2nueqSf2fVaGn6ZBnfDOuHtrn5F5sPy3totP%2F4ipp3CZSGDs0Qu%2BsqLWSons28%2BPEOhysVNSv0xjpNSn%2FnpxheveSSh60ZImmT9NxWBtVbkBAAA',
        }}
        allowsFullscreenVideo
        style={{marginTop: 20, backgroundColor: 'red', flex: 1}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default App;
