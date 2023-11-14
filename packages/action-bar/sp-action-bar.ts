/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// import { ActionBar } from './src/ActionBar.js';
// import { defineElement } from '@spectrum-web-components/base/src/define-element.js';

// defineElement('sp-action-bar', ActionBar);

declare global {
    interface HTMLElementTagNameMap {
        'sp-action-bar': ActionBar;
    }
}

import { registry } from './utils/sharedRegistry.js';
import { ActionBar } from './src/ActionBar.js';

registry.define('sp-action-bar', ActionBar);

const originalCreateElement = Document.prototype.createElement;

Document.prototype.createElement = function (
    tagName: string,
    options: ElementCreationOptions | undefined
) {
    // How do we get the version here to get the defination from registry ? Or we find another way to select which version to call here ?
    const version = '0.39.4';
    const versionedtagName = registry.getName(tagName, version) ?? tagName;
    return originalCreateElement.call(this, versionedtagName, options);
};
