import { WebPlugin } from '@capacitor/core';
import type { PusherBeamsPlugin, TokenProviderHeader } from './definitions';

export class PusherBeamsWeb extends WebPlugin implements PusherBeamsPlugin {
  private nativeOnly = "Method not implemented for web browser.";
  
  async addDeviceInterest(options: { interest: string; }): Promise<{ message: string; }> {
    console.log(options);
    throw this.unimplemented(this.nativeOnly);
  }

  async removeDeviceInterest(options: { interest: string }): Promise<{ success: boolean }> {
    console.log(this.nativeOnly, options);
    return { success : true };
  }

  async setUserID(options: { beamsAuthURL: string; userID: string; headers: TokenProviderHeader; }): Promise<string | { message: string; }> {
    console.log(options);
    return { message: 'success'};
  }

  async getDeviceInterests(): Promise<{ interests: string[] }> {
    console.log(this.nativeOnly);
    return { interests: [] };
  }
  
  async setDeviceInterests(options: { interests: string[] }): Promise<{ interests: string[] }> {
    console.log(this.nativeOnly);
    return { interests: options.interests };
  }

  async clearDeviceInterests(): Promise<{success: boolean}> {
    console.log(this.nativeOnly);
    return { success: true };
  }

  async clearAllState(): Promise<{success: boolean}> {
    console.log(this.nativeOnly);
    return { success: true };
  }

  async stop(): Promise<{success: boolean}> {
    console.log(this.nativeOnly);
    return {success: true};
  }
}
