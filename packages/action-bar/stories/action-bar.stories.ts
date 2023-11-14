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

import { html, TemplateResult } from '@spectrum-web-components/base';

import '@spectrum-web-components/action-bar/sp-action-bar.js';
import '@spectrum-web-components/field-label/sp-field-label.js';
import '@spectrum-web-components/action-button/sp-action-button.js';
import '@spectrum-web-components/action-group/sp-action-group.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-edit.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-more.js';

export default {
    title: 'Action Bar',
    component: 'sp-action-bar',
};

export const Default = (): TemplateResult => {
    // Create elements using document.createElement
    const actionBar = document.createElement('sp-action-bar');
    actionBar.setAttribute('open', '');
    const actionButtonEdit = document.createElement('sp-action-button');
    actionButtonEdit.setAttribute('slot', 'buttons');
    actionButtonEdit.setAttribute('label', 'Edit');
    const iconEdit = document.createElement('sp-icon-edit');
    iconEdit.setAttribute('slot', 'icon');
    actionButtonEdit.appendChild(iconEdit);
    actionBar.appendChild(actionButtonEdit);

    const actionButtonMore = document.createElement('sp-action-button');
    actionButtonMore.setAttribute('slot', 'buttons');
    actionButtonMore.setAttribute('label', 'More');
    const iconMore = document.createElement('sp-icon-more');
    iconMore.setAttribute('slot', 'icon');
    actionButtonMore.appendChild(iconMore);
    actionBar.appendChild(actionButtonMore);

    // Return a template result with the created elements
    return html`
        ${actionBar}
    `;
};

export const emphasized = (): TemplateResult => {
    return html`
        <sp-action-bar open emphasized>
            2 selected
            <sp-action-button slot="buttons" label="Edit">
                <sp-icon-edit slot="icon"></sp-icon-edit>
            </sp-action-button>
            <sp-action-button slot="buttons" label="More">
                <sp-icon-more slot="icon"></sp-icon-more>
            </sp-action-button>
        </sp-action-bar>
    `;
};

export const fixed = (): TemplateResult => {
    return html`
        <style>
            [variant='fixed'] {
                bottom: 2.5em;
                inset-inline-end: 1em;
            }
        </style>
        <sp-action-bar open variant="fixed">
            2 selected
            <sp-action-button slot="buttons" label="Edit">
                <sp-icon-edit slot="icon"></sp-icon-edit>
            </sp-action-button>
            <sp-action-button slot="buttons" label="More">
                <sp-icon-more slot="icon"></sp-icon-more>
            </sp-action-button>
        </sp-action-bar>
    `;
};

export const flexible = (): TemplateResult => {
    return html`
        <sp-action-bar open flexible emphasized>
            2 selected
            <sp-action-button slot="buttons" label="Edit">
                <sp-icon-edit slot="icon"></sp-icon-edit>
            </sp-action-button>
            <sp-action-button slot="buttons" label="More">
                <sp-icon-more slot="icon"></sp-icon-more>
            </sp-action-button>
        </sp-action-bar>
    `;
};
