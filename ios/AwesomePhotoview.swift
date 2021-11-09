import UIKit
import Lantern
import SDWebImage

@objc(AwesomePhotoview)
class AwesomePhotoview: NSObject {

    @objc(multiply:b:withResolver:withRejecter:)
    func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        resolve(a*b)
    }

    @objc(open:withResolver:withRejecter:)
    func open(config: AnyObject, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        resolve(true)
    }
}
