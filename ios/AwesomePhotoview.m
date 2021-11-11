//#import <React/RCTBridgeModule.h>
#import "AwesomePhotoview.h"

@interface AwesomePhotoview ()

@end

@implementation AwesomePhotoview

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(printLog:(NSString *)info) {
    NSLog(@"%@", info);
    
}

RCT_EXPORT_METHOD(open:(NSDictionary *)config withResolver:(RCTPromiseResolveBlock)resolve withRejecter:(RCTPromiseRejectBlock)reject) {

}

@end








//
//@interface RCT_EXTERN_MODULE(AwesomePhotoview, NSObject)
//
//RCT_EXTERN_METHOD(multiply:(float)a b:(float)b
//                 withResolver:(RCTPromiseResolveBlock)resolve
//                 withRejecter:(RCTPromiseRejectBlock)reject)
//
//RCT_EXTERN_METHOD(open:(NSDictionary)config
//                 withResolver:(RCTPromiseResolveBlock)resolve
//                 withRejecter:(RCTPromiseRejectBlock)reject)
//
//@end
