import React from 'react';

abstract class BaseComponent<Instance, Props, State> extends React.Component<Props, State> {
  private internalInstance: Instance;
  
  get instance() {
    return this.internalInstance;
  }
}