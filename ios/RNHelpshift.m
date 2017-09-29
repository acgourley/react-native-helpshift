#import "RNHelpshift.h"

#import "HelpshiftSupport.h"

#import "RCTConvert.h"
#import "RCTEventDispatcher.h"

@implementation RNHelpshift

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

# pragma mark - Exposed methods

RCT_EXPORT_METHOD(showFAQs:(NSDictionary*)optionsDictionary)
{
  UIViewController *rootController = UIApplication.sharedApplication.delegate.window.rootViewController;
  [HelpshiftSupport showFAQs:rootController withOptions:optionsDictionary];
}

@end
