package org.paradox.updater;

import org.paradox.updater.handle.Updater;

/**
 * Created with IntelliJ IDEA.
 * User: jeronimo078
 * Date: 06-06-13
 * Time: 18:23
 * To change this template use File | Settings | File Templates.
 */
public class Boot {

    public static void main(String[] args) throws Exception {
        new Updater().update();
    }

}
