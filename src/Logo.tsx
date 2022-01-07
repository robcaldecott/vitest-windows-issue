interface LogoProps {
  height?: number;
  width: number;
  fill: string;
}

function Logo({ height, width, fill }: LogoProps) {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 626.145 160"
      aria-label="Keyloop logo"
      role="img"
    >
      <path
        fill={fill}
        d="M548.887 113.564c-17.734 0-29.257-13.126-29.257-32.966 0-19.839 11.522-32.964 29.257-32.964 17.435 0 29.058 13.125 29.058 32.964-.001 19.84-11.624 32.966-29.058 32.966m3.708-85.067c-13.728 0-25.351 6.112-31.362 15.43V30.1H499.29v129.897h21.943v-41.522c5.711 8.718 17.135 14.229 29.959 14.229 30.161 0 48.797-21.644 48.797-52.104-.001-30.46-17.635-52.103-47.394-52.103m-112.306 84.566c-21.845 0-27.654-22.344-42.283-22.344-14.63 0-20.541 22.344-42.186 22.344-17.334 0-29.857-13.526-29.857-32.465 0-18.936 12.523-32.463 29.857-32.463 21.645 0 27.556 22.345 42.186 22.345 14.629 0 20.438-22.345 42.283-22.345 17.233 0 29.657 13.527 29.657 32.463 0 18.939-12.424 32.465-29.657 32.465m1.804-84.566c-28.757 0-35.571 19.939-44.087 19.939-8.519 0-15.432-19.939-44.087-19.939-29.762 0-50.301 22.144-50.301 52.102 0 29.96 20.54 52.104 50.301 52.104 28.655 0 35.568-19.939 44.087-19.939 8.516 0 15.33 19.939 44.087 19.939 29.759 0 50.198-22.145 50.198-52.104 0-29.958-20.439-52.102-50.198-52.102M274.871 0h21.942v131.1h-21.942V0zm-25.45 30.1h22.644l-35.369 96.792-11.331 33.105h-21.01l9.797-28.397-37.175-101.5h22.545l24.949 72.542 24.95-72.542zM133.292 45.53c15.63 0 25.249 9.92 26.353 24.048h-53.507c2.807-16.032 12.326-24.048 27.154-24.048m2.006 68.636c-16.634 0-28.057-11.723-29.76-29.358h75.85c.201-1.903.401-5.01.401-8.016 0-24.849-15.932-48.295-48.496-48.295-32.063 0-49.097 24.147-49.097 51.601 0 27.256 18.937 52.605 51.102 52.605 24.847 0 43.384-13.729 47.091-34.868h-21.742c-2.705 10.519-11.625 16.331-25.349 16.331m-85.61-35.944L97.074 131.1H68.097L27.063 85.013l-4.918-5.524V131.1H0V0h22.145v75.73l5.272-5.339L67.203 30.1h29.705l-47.22 48.122zm562.664-33.925V30.064h3.722l3.169 6.135h.252l3.118-6.135h3.521v14.233h-2.918v-5.633l.252-4.426h-.201l-4.023 7.594-4.023-7.594h-.202l.252 4.426v5.633h-2.919zm-8.903 0V32.679h-4.022v-2.615h11.265v2.615h-3.973v11.618h-3.27z"
      />
    </svg>
  );
}

export { Logo };
