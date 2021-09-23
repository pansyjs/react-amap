import { useRef } from 'react';

export type compareFunction<T> = (prev: T | undefined, next: T) => boolean;

/**
 * 保存上一次渲染时状态的 Hook
 * @param state 需要记录变化的值
 * @param compare 可选，自定义值变化的规则
 * @returns
 */
export function usePrevious<T>(state: T, compare?: compareFunction<T>): T | undefined {
  const prevRef = useRef<T>();
  const curRef = useRef<T>();

  const needUpdate = typeof compare === 'function' ? compare(curRef.current, state) : true;

  if (needUpdate) {
    prevRef.current = curRef.current;
    curRef.current = state;
  }

  return prevRef.current;
}
