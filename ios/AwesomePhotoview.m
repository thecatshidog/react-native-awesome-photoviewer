//#import <React/RCTBridgeModule.h>
#import "AwesomePhotoview.h"
#import "YBImageBrowser.h"
#import "YBIBVideoData.h"

@interface AwesomePhotoview ()

@end

@implementation AwesomePhotoview

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(printLog:(NSString *)info) {
    NSLog(@"%@", info);
    
}

RCT_EXPORT_METHOD(open:(NSDictionary *)config withResolver:(RCTPromiseResolveBlock)resolve withRejecter:(RCTPromiseRejectBlock)reject) {
    NSArray *images = [[NSArray alloc] initWithArray:[config objectForKey:@"images"]];
    NSNumber *index = (NSNumber *)[config objectForKey:@"initialIndex"];
    if (images.count == 0 || [index intValue] > images.count-1) {
        if (reject) {
            reject(@"-1", @"data error", nil);
        }
        return;
    }
    NSMutableArray *imageArr = [[NSMutableArray alloc] init];
    for (NSDictionary *obj in images) {
        NSString *url = [obj objectForKey:@"url"];
//        NSLog(@"%@", url);
        [imageArr addObject:url];
    }
    
    NSMutableArray *datas = [[NSMutableArray alloc] init];
    [imageArr enumerateObjectsUsingBlock:^(NSString *_Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        if ([obj hasSuffix:@".mp4"] && [obj hasPrefix:@"http"]) {
            // 网络视频
            YBIBVideoData *data = [YBIBVideoData new];
            data.videoURL = [NSURL URLWithString:obj];
            [datas addObject:data];
         
        } else if ([obj hasSuffix:@".mp4"]) {
            // 本地视频
            NSString *path = [[NSBundle mainBundle] pathForResource:obj.stringByDeletingPathExtension ofType:obj.pathExtension];
            YBIBVideoData *data = [YBIBVideoData new];
            data.videoURL = [NSURL fileURLWithPath:path];
            [datas addObject:data];
            
        } else if ([obj hasPrefix:@"http"]) {
            // 网络图片
            YBIBImageData *data = [YBIBImageData new];
            data.imageURL = [NSURL URLWithString:obj];
//            data.allowSaveToPhotoAlbum = NO;
            [datas addObject:data];
            
        } else {
            // 本地图片
            YBIBImageData *data = [YBIBImageData new];
            data.imageName = obj;
            [datas addObject:data];
            
        }
    }];
    
    dispatch_async(dispatch_get_main_queue(), ^{
        YBImageBrowser *browser = [YBImageBrowser new];
        browser.dataSourceArray = datas;
        browser.currentPage = [index integerValue];
        browser.defaultToolViewHandler.topView.operationType = YBIBTopViewOperationTypeSave;
        [browser show];
    });
    
    
    
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
