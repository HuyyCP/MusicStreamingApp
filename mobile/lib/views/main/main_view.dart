import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile/views/audio_controls/audio_controls_view_model.dart';
import 'package:mobile/views/audio_controls/widgets/audio_widget.dart';
import 'package:mobile/views/main/main_view_model.dart';
import 'package:mobile/widgets/dynamic_image.dart';

class MainView extends ConsumerStatefulWidget {
  const MainView({super.key});

  @override
  ConsumerState<MainView> createState() => _MainViewState();
}

class _MainViewState extends ConsumerState<MainView> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _body(),
      floatingActionButton: _trackPlayer(),
      bottomNavigationBar: _bottomNavBar(),
      floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,
    );
  }

  Widget _body() {
    return ref.watch(mainViewModel.select(
      (value) => value.views[value.currentPage]
    ));
  }

  Widget _trackPlayer() {
    return Visibility(
      visible: ref.watch(audioControlsViewModel.select(
        (value) => value.track != null
      )),
      child: AudioWidget()
    );
  }

  Widget _bottomNavBar() {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.bottomCenter,
          end: Alignment.topCenter,
          colors: [Colors.black, Colors.black.withOpacity(0.75)]
        ),
      ),
      child: BottomNavigationBar(
        currentIndex: ref.watch(mainViewModel).currentPage,
        unselectedLabelStyle: TextStyle(
          color: Colors.white
        ),
        selectedLabelStyle: TextStyle(
          color: Colors.white
        ),  
        useLegacyColorScheme: false,
        showSelectedLabels: true,
        showUnselectedLabels: true,
        backgroundColor: Colors.transparent,
        onTap: ref.read(mainViewModel).changeView,
        items: ref.read(mainViewModel).viewInfos.map(
          (view) => BottomNavigationBarItem(
            label: view.title,
            backgroundColor: Colors.transparent,
            icon: DynamicImage(view.iconData, width: 24, height: 24),
            activeIcon: DynamicImage(view.selectedIconData, width: 24, height: 24),
        )).toList()
      )
    );
  }
}