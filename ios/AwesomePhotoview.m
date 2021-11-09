#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(AwesomePhotoview, NSObject)

RCT_EXTERN_METHOD(multiply:(float)a b:(float)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(open:(NSDictionary)config
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

@end
