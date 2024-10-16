import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:mobile/utils/constants.dart';
import 'package:mobile/views/splash/splash_view_model.dart';

class SplashView extends ConsumerStatefulWidget {
  const SplashView({super.key});

  @override
  ConsumerState<SplashView> createState() => _SplashViewState();
}

class _SplashViewState extends ConsumerState<SplashView> {
  @override
  void initState() {
    super.initState();
    ref.read(splashViewModel).init();
  }

  @override
  Widget build(BuildContext context) {
    ref.listen(splashViewModel, (prev, next) {
      if (next.isInitialized) {
        if (next.isValidSession) {
          context.go('/main');
        } else {
          context.go('/auth');
        }
      }
    });

    return Scaffold(
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            SizedBox(
              width: 100,
              height: 100,
              child: Image.asset(
                'assets/images/app_image.png',
                fit: BoxFit.contain,
              ),
            ),
            const SizedBox(height: 12),
            Text(
              APP_NAME,
              style: Theme.of(context).textTheme.titleLarge
            )
          ],
        ),
      ),
    );
  }
}